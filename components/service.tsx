import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { containerVariants, imageVariants, itemVariants } from '@/lib/utils'

const Service = ({ data }: any) => {
    const locale = useLocale()
    return (
        <motion.section variants={containerVariants} initial="hidden" whileInView="show" id='ourservices' className='max-w-350 w-[90%] mx-auto flex flex-col items-center gap-20 relative'>
            <motion.h3 variants={itemVariants} className='lg:text-3xl text-xl font-semibold text-center'>{data?.our_service?.[`title_${locale}`]}</motion.h3>
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" className='w-full flex lg:flex-row flex-col items-center justify-center gap-10 relative'>
                <motion.p variants={itemVariants} className='font-semibold italic'>{data?.our_service?.[`sub1_${locale}`]}</motion.p>
                <motion.p variants={itemVariants} className='font-semibold italic'>{data?.our_service?.[`sub2_${locale}`]}</motion.p>
                <motion.p variants={itemVariants} className='font-semibold italic'>{data?.our_service?.[`sub3_${locale}`]}</motion.p>
            </motion.div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" className='w-full flex lg:flex-row flex-col items-center justify-center gap-10 relative'>
                <motion.div variants={containerVariants} initial="hidden" whileInView="show" className='w-full lg:w-fit flex flex-col gap-10'>
                    <motion.h3 variants={itemVariants} className='lg:text-2xl text-lg font-semibold'>{data?.our_service?.[`desc_${locale}`]}</motion.h3>
                    <motion.div variants={containerVariants} initial="hidden" whileInView="show" className='w-full flex flex-col gap-5 p-4 py-6 rounded-lg bg-accent border-s-5 border-zinc-600'>
                        <motion.h3 variants={itemVariants} className='lg:text-xl text-base font-semibold uppercase text-muted-foreground'>{data?.our_service?.[`note_title_${locale}`]}</motion.h3>
                        <motion.p variants={itemVariants}>{data?.our_service?.[`note_desc_${locale}`]}</motion.p>
                    </motion.div>
                </motion.div>
                <motion.img variants={imageVariants} src={data?.our_service?.image} className='w-full max-w-175 bg-zinc-700 rounded-2xl' alt={data?.our_service?.[`title_${locale}`]} />
            </motion.div>
        </motion.section>
    )
}

export default Service