import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <main className="w-full bg-background">
      <section className="container py-16 space-y-8 max-w-[400px] sm:max-w-[600px] md:space-y-12">
        <div className="space-y-4 text-center md:space-y-8">
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl leading-normal sm:leading-relaxed md:leading-[4rem]">
            Send Messages Anonymously
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
        <div className="container flex flex-wrap gap-8">
          {HERO_INFO.map(({ title, content }, index) => (
            <Card
              className="flex-1 min-w-[240px]"
              key={index}
            >
              <CardHeader>
                <CardTitle className="text-lg">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted">
                {content}
              </CardContent>
            </Card>
          ))}
        </div>
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

const HERO_INFO: { title: string; content: string }[] = [
  {
    title: 'Your Identity, Your Secret',
    content: `Incognito ensures your identity remains hidden. 
      Chat, share, and connect without revealing your 
      personal information. Your secrets are safe with us.`,
  },
  {
    title: 'Real Conversations, Real Connections',
    content: `Engage in genuine conversations with 
    people from around the world. Discover new friends, 
    share stories, and explore the depths of human connection.`,
  },
  {
    title: 'Endless Possibilities',
    content: `Whether it's seeking advice, sharing your thoughts, 
    or making new friends, Incognito opens the door to endless 
    possibilities. You're in control of your conversations.`,
  },
  {
    title: 'Join the Incognito Community Today',
    content: `Unleash your voice and connect with others like never before. 
    Join Incognito now and start your journey to anonymous conversations 
    and authentic connections.`,
  },
];
