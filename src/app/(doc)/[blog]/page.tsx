import GoBack from '@/components/go-back';
import Profile from '../blogs/profile';
import './prism.css';
import Mdx from './ftPrintf.mdx';
export default function Page() {
  return (
    <section className='max-w-3xl p-8 mx-auto prose prose-invert bg-neutral-800'>
      <div className='relative'>
        <GoBack className='absolute -left-32 ' />
        <h1>Understanding the inner workings of printf: A deep dive into the ft_printf project</h1>
      </div>

      <Profile mini />
      <Mdx />
    </section>
  );
}
