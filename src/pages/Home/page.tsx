import { Button } from "@/components";

const Home: React.FC = () => {
    return (
        <main className="min-h-screen p-5 bg-background-light flex justify-center items-center relative overflow-hidden">
            <div className="text-justify text-text-dark space-y-3 md:space-y-5 max-w-xl md:max-w-2xl z-10">
                <h1 className="text-2xl md:text-4xl font-bold">Welcome to <span className="text-items-accent-light">ZappMail</span></h1>
                <p className="text-text-dark-contrast text-base">
                    Say goodbye to limits and locked-down APIs. ZappMail is a developer-first email delivery tool built with
                    <strong> Node.js, Express,</strong> and <strong>Nodemailer</strong>. It&apos;s fast, reliable, and gives you full control.
                    No third-party services, no noise.
                </p>
                <p className="text-text-dark-contrast text-base">
                    Perfect for cold emailing, custom flows, and teams who want bare-metal performance without the overhead.
                </p>
                <Button
                    text="Get Started — It's Free"
                    customClasses="bg-items-accent-light hover:bg-items-accent-lighter"
                />
            </div>

            <span className="w-48 h-48 md:w-72 md:h-72 absolute left-0 top-0 bg-gradient-to-br from-items-accent to-items-accent-lighter rounded-full blur-3xl -translate-x-1/4 -translate-y-1/2 md:-translate-x-1/3 md:-translate-y-1/2 opacity-90"></span>
            <span className="w-48 h-48 md:w-72 md:h-72 absolute right-0 bottom-0 bg-gradient-to-tl from-items-accent to-items-accent-lighter rounded-full blur-3xl translate-x-1/4 translate-y-1/2 md:translate-x-1/3 md:translate-y-1/2 opacity-90"></span>
        </main>
    );
};

export default Home;