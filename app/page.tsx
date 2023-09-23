import InfoCards from '@/components/hero/info-cards';
import { Button } from '@/components/ui/button';

import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import Typewriter from '@/components/ui/typewriter';

export default function Home() {
  return (
    <main className="w-full bg-background">
      <section className="container py-16 space-y-8 max-w-[400px] sm:max-w-[600px] md:max-w-[700px] md:space-y-12">
        <div className="space-y-4 text-center md:space-y-8">
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl leading-normal sm:leading-relaxed md:leading-[4rem]">
            <span className="text-primary block">
              <Typewriter
                words={['Send', 'Recieve']}
                loop
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
              />
            </span>{' '}
            Messages Anonymously
            <span className="text-primary">.</span>
          </h1>
          <p className="text-muted text-sm md:text-base">
            Have you ever wanted to speak your mind without
            fear of judgment or repercussions? With
            Incognito, you can finally express yourself
            freely and anonymously.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <GetStarted
            label={<Button>Get Started</Button>}
          />
          <RetrieveMesseges
            label={
              <Button variant="outline">
                Retrive Messages
              </Button>
            }
          />
        </div>
      </section>

      <section className="pb-20 md:pt-10">
        <InfoCards />
      </section>
    </main>
  );
}

const GetStarted = ({
  label,
}: {
  label: React.ReactNode;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{label}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Account</DialogTitle>
          <DialogDescription>
            Enter a password and we&#39;ll create an
            anonymous account for you with. If you already
            have this an account, you can{' '}
            <RetrieveMesseges
              label={
                <button className="text-secondary">
                  proceed to login.
                </button>
              }
            />
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-6">
          <div className="grid gap-2">
            <label htmlFor="password">Password</label>
            <Input
              placeholder="Enter Password"
              id="password"
            />
          </div>
          <Button type="button" size="sm" className="mt-4">
            Create Account
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const RetrieveMesseges = ({
  label,
}: {
  label: React.ReactNode;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{label}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Login to retrieve your anonymous conversations.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-6">
          <div className="grid gap-2">
            <label htmlFor="id">User ID</label>
            <Input placeholder="Enter user ID" id="id" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password">Password</label>
            <Input
              placeholder="Enter Password"
              id="password"
            />
          </div>
          <Button type="button" size="sm" className="mt-4">
            Login
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
