import { useLocale } from 'next-intl'
import {motion} from 'framer-motion'
import { containerVariants, imageVariants, itemVariants } from '@/lib/utils'
const Work = ({ data }: any) => {
    const locale = useLocale()
    return (
        <section id='whyus' dir='ltr' className='min-h-screen flex items-center relative'>
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" className='max-w-350 w-[90%]  mx-auto flex lg:flex-row flex-col items-center gap-5 relative z-10'>
                <motion.img variants={imageVariants} src={data?.work?.image} className='w-full max-w-175 rounded-2xl' alt={data?.about?.[`title_${locale}`]} />
                <motion.div variants={containerVariants} initial="hidden" whileInView="show" className='flex flex-col gap-5 w-full'>
                    <motion.h3 variants={itemVariants} className='lg:text-3xl text-2xl font-bold'>{data?.work?.[`title_${locale}`]}</motion.h3>
                    <motion.h3 variants={itemVariants} className='lg:text-2xl text-xl font-bold'>{data?.work?.[`title2_${locale}`]}</motion.h3>
                    <motion.p variants={itemVariants} className='pb-5 border-b border-b-accent'>{data?.work?.[`desc_${locale}`]}</motion.p>
                    <motion.p variants={itemVariants}>{data?.work?.[`desc2_${locale}`]}</motion.p>
                </motion.div>
            </motion.div>
            <img src={'/bg1.png'} className='lg:block hidden absolute w-full h-full left-0 top-0 z-0' />
        </section>
    )
}

export default Work