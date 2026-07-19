import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { AuthState } from "../types/auth";
import { signInWithPopup, onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth";
import { firebaseAuth, googleAuthProvider } from "../config/firebase";

interface AuthContextProps {
    authState: AuthState;
    signWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [authState, setAuthState] = useState<AuthState>({
        user: null,
        error: null,
        loading: false,
    });
    useEffect(() => {
        const unsubscribe = onAuthStateChanged( firebaseAuth,
            (user) => {
                if (user) {
                    setAuthState((prev) => ({ ...prev, user, loading: false }));
                } else {
                    setAuthState((prev) => ({ ...prev, user: null, loading: false }));
                }
            },
            (error) => {
                console.error("Erro na autenticação:", error);
                setAuthState({
                    user: null,
                    error: error.message,
                    loading: false,
                });
            },
        );

        return () => unsubscribe();
    }, []);

    const signWithGoogle = async (): Promise<void> => {
        // Implementation for Google sign-in
        setAuthState((prev) => ({ ...prev, loading: true }));


        try {
            await signInWithPopup(firebaseAuth, googleAuthProvider);
            // Handle successful sign-in
        } catch (err) {
            const message = err instanceof Error ? err.message : "Erro ao fazer login com Google";

            setAuthState((prev) => ({ ...prev, error: message, loading: false }));

        }
    };

    const signOut = async (): Promise<void> => {
        // Implementation for sign-out
        try {
            await firebaseSignOut(firebaseAuth);
            setAuthState((prev) => ({ ...prev, user: null, loading: true }));
        } catch (err) {
            const message = err instanceof Error ? err.message : "Erro ao fazer logout";
            setAuthState((prev) => ({ ...prev, error: message, loading: false }));
        }

    };
    
    return (
    <AuthContext.Provider value={{ authState, signWithGoogle, signOut }}> 
    {children}
    </AuthContext.Provider >
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};