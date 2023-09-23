import Login from '../login';
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

const Register = ({ label }: { label: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{label}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Account</DialogTitle>
          <DialogDescription className='leading-relaxed'>
            Enter a password and we&#39;ll create an anonymous account for you.
            If you already have an account, you can{' '}
            <Login
              label={
                <button className='text-primary'>proceed to login.</button>
              }
            />
          </DialogDescription>
        </DialogHeader>

        <form className='grid gap-6'>
          <div className='grid gap-2'>
            <label htmlFor='password'>Password</label>
            <Input placeholder='Enter Password' id='password' />
          </div>
          <Button type='button' size='sm' className='mt-4'>
            Create Account
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default Register;
