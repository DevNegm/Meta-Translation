import { useLocale, useTranslations } from 'next-intl'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants, scrollTo } from '@/lib/utils'

const Header = ({ data }: any) => {
    const locale = useLocale()
    const t = useTranslations('main');

    return (
        <header id='home' className='min-h-[75vh] h-full py-5 flex items-center pt-16 relative mt-20 bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${data?.header?.image})` }}>
            <div className='bg-black/50 absolute inset-0 w-full h-full' />
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" className='max-w-350 w-[90%] mx-auto flex flex-col justify-center gap-4 relative'>
                <motion.h3 variants={itemVariants} className='text-2xl  lg:text-4xl font-bold text-white'>{data?.header?.[`title_${locale}`]}</motion.h3>
                <motion.p variants={itemVariants} className='text-white'>{data?.header?.[`sub_${locale}`]}</motion.p>
                <motion.p variants={itemVariants} className='text-white'>{data?.header?.[`desc_${locale}`]}</motion.p>
                <Button onClick={() =>  scrollTo('about', 80)} className='w-fit rounded-full font-semibold mt-5 px-5 custom-btn'>{t('button')}</Button>
            </motion.div>
        </header>
    )
}

export default Header