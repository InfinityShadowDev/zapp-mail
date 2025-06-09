import { Button, Input } from "@/components";

const SignUp: React.FC = () => {
    return (
        <main className="min-h-screen p-5 bg-background-light flex justify-center items-center relative overflow-hidden">
            <div className="text-justify bg-background-light shadow-lg border border-background-light-contrast rounded-lg px-5 py-8 gap-8 text-text-dark min-w-xs md:max-w-2xl z-10 flex flex-col">
                <h1 className="text-center text-2xl md:text-3xl font-bold relative before:content-[''] before:absolute before:bg-items-accent before:w-full before:h-[2px] before:-bottom-2 before:left-0">
                    Create an <span className="text-items-accent-light">Account</span>
                </h1>
                <form className="text-text-dark-contrast text-base w-full flex flex-col gap-4">
                    <Input
                        label="Username"
                        type="text"
                        name="username"
                        value="username"
                        placeholder="Enter username"
                        onChange={() => void [0]}
                    />

                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        value="email"
                        placeholder="Enter email"
                        onChange={() => void [0]}
                    />

                    <Input
                        label="Password"
                        type="password"
                        name="password"
                        value="password"
                        placeholder="Enter password"
                        onChange={() => void [0]}
                    />
                </form>
                <Button
                    text="Get Started — It's Free"
                    customClasses="bg-items-accent-light hover:bg-items-accent-lighter"
                />
            </div>

            <span className="w-48 h-48 md:w-72 md:h-72 absolute left-0 top-0 bg-gradient-to-br from-items-accent to-items-accent-lighter rounded-full blur-3xl -translate-x-1/4 -translate-y-1/2 md:-translate-x-1/3 md:-translate-y-1/2 opacity-90"></span>
            <span className="w-48 h-48 md:w-72 md:h-72 absolute right-0 bottom-0 bg-gradient-to-tl from-items-accent to-items-accent-lighter rounded-full blur-3xl translate-x-1/4 translate-y-1/2 md:translate-x-1/3 md:translate-y-1/2 opacity-90"></span>
        </main>
    );
}

export default SignUp;