import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { containerVariants, imageVariants, itemVariants } from '@/lib/utils'

const About = ({ data }: any) => {
    const locale = useLocale()
    return (
        <motion.section variants={containerVariants} initial="hidden" whileInView="show" id='about' className='max-w-350 w-[90%] mx-auto flex flex-col items-center gap-20 relative'>
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" className='w-full flex lg:flex-row flex-col items-center gap-10 relative'>
                <motion.img variants={imageVariants} src={data?.about?.image} className='w-full max-w-175 rounded-2xl' alt={data?.about?.[`title_${locale}`]} />
                <div className='flex flex-col gap-5'>
                    <motion.h3 variants={itemVariants} className='lg:text-3xl text-xl font-semibold'>{data?.about?.[`title_${locale}`]}</motion.h3>
                    <motion.p variants={itemVariants}>{data?.about?.[`desc_${locale}`]}</motion.p>
                </div>
            </motion.div>
           <motion.div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-full'>
                {data?.about?.items?.map((item: any, index: number) => (
                    <motion.div variants={containerVariants} initial="hidden" whileInView="show" className='flex flex-col justify-center items-center text-center gap-5 p-4 py-6 rounded-lg bg-accent w-full' key={index}>
                        <motion.img variants={imageVariants} src={item?.icon} className='w-14 h-14 rounded-full' alt={item?.[`title_${locale}`]} />
                        <motion.h4 variants={itemVariants} className='lg:text-2xl text-xl font-bold'>{item?.[`title_${locale}`]}</motion.h4>
                        <motion.p variants={itemVariants} className='text-accent-foreground'>{item?.[`desc_${locale}`]}</motion.p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}

export default About