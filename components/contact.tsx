import { useLocale } from 'next-intl';
import ContactForm from './contact-form';
import {motion} from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/utils';
const Contact = ({ data }: any) => {
    const locale = useLocale();

    return (
        <motion.section variants={containerVariants} initial="hidden" whileInView="show" id='contact' className='max-w-5xl w-[90%] mx-auto flex flex-col gap-20'>
                <motion.h3 variants={itemVariants} className='text-2xl lg:text-4xl font-bold text-center'>{data?.contact?.[`title_${locale}`]}</motion.h3>
                <ContactForm/>
        </motion.section>
    )
}

export default Contact