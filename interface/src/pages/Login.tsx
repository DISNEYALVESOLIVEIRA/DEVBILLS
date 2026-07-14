import GoogleLoginButton from "../components/GoogleLoginButton";


const Login = () => {

    return (

        <div>
            <header>
                <h1>
                    DevBills
                </h1>
                <p>
                    Gerencie suas finanças de forma sinples e eficiente.
                </p>
            </header>
            <main>
                <section>
                    <h2>
                        Faça login para continuar
                    </h2>
                    <p>
                        Acesse sua conta para comerçar a gerenciar suas finanças.
                    </p>
                </section>

                <GoogleLoginButton isLoading={false} onClick={() => {}} />
<footer>
    <p>Ao fazer login, você concorda com nossos termos de serviço e política de privacidade.</p>
</footer>
            </main>
        </div>
    );
};

export default Login;