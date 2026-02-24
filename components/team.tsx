import { useLocale } from 'next-intl';
import { motion } from 'framer-motion'
import { containerVariants, imageVariants, itemVariants } from '@/lib/utils';
const Team = ({ data }: any) => {
    const locale = useLocale();
    return (
        <motion.section variants={containerVariants} initial="hidden" whileInView="show" id='team' className='max-w-300 w-[90%] mx-auto flex flex-col gap-10'>
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" className='flex lg:flex-row flex-col items-center justify-between gap-4'>
                <motion.div variants={containerVariants} initial="hidden" whileInView="show" className='flex flex-col lg:items-start items-center justify-between gap-4'>
                    <motion.h3 variants={itemVariants} className='text-xl lg:text-2xl font-bold'>{data?.team?.[`title_${locale}`]}</motion.h3>
                    <motion.h3 variants={itemVariants} className='text-2xl lg:text-4xl font-bold'>{data?.team?.[`title2_${locale}`]}</motion.h3>
                </motion.div>
                <motion.p variants={itemVariants} className='max-w-125'>{data?.team?.[`desc_${locale}`]}</motion.p>
            </motion.div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" className='flex lg:flex-row flex-col gap-5 flex-wrap justify-center items-center'>
                {data?.team?.members?.map((member: any, index: number) => (
                    <motion.div variants={containerVariants} initial="hidden" whileInView="show" className='flex flex-col items-center lg:max-w-[calc(25%-20px)] w-full gap-5 rounded-lg bg-accent overflow-hidden' key={index}>
                        <motion.img variants={imageVariants} src={member?.image} className='w-full h-50 object-cover object-top' alt={member?.[`title_${locale}`]} />
                        <motion.div variants={containerVariants} initial="hidden" whileInView="show" className='flex flex-col gap-4  p-4'>
                            <motion.h4 variants={itemVariants} className='lg:text-2xl text-xl font-bold'>{member?.[`name_${locale}`]}</motion.h4>
                            <motion.p variants={itemVariants} className='text-accent-foreground'>{member?.[`title_${locale}`]}</motion.p>
                        </motion.div>
                    </motion.div>
                ))}
               
            </motion.div>
        </motion.section>
    )
}

export default Team