import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Input } from '../ui/input';

const Login = ({ label }: { label: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{label}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription className='leading-relaxed'>
            Login to retrieve your anonymous conversations.
          </DialogDescription>
        </DialogHeader>

        <form className='grid gap-6'>
          <div className='grid gap-2'>
            <label htmlFor='id'>User ID</label>
            <Input placeholder='Enter user ID' id='id' />
          </div>
          <div className='grid gap-2'>
            <label htmlFor='password'>Password</label>
            <Input placeholder='Enter Password' id='password' />
          </div>
          <Button type='button' size='sm' className='mt-4'>
            Login
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
