import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion'
import { containerVariants, imageVariants, itemVariants } from '@/lib/utils';
const Services = ({data}:any) => {
    const t = useTranslations('main');
    const locale = useLocale();
    return (
        <motion.section variants={containerVariants} initial="hidden" whileInView="show" id='services' className='max-w-350 w-[90%] mx-auto flex flex-col gap-10'>
            <motion.h3 variants={itemVariants} className='text-2xl lg:text-4xl font-bold text-center'>{t('services-s')}</motion.h3>
            <motion.div className='flex lg:flex-row flex-col justify-center flex-wrap gap-5'>
                {data?.services?.map((service: any, index: number) => (
                    <motion.div variants={containerVariants} initial="hidden" whileInView="show" className='lg:max-w-[calc(25%-20px)] w-full flex flex-col gap-5 p-4 rounded-lg bg-accent' key={index}>
                        <motion.img variants={imageVariants} src={service?.image ?? '/ex.jpg'} className='w-full h-50 object-cover rounded-2xl' alt={service?.[`title_${locale}`]} />
                        <motion.p variants={itemVariants} className='px-4 py-2 text-sm font-bold rounded-full w-fit text-(--btn-bg-color) bg-(--btn-bg-color)/10'>{service?.[`type_${locale}`]}</motion.p>
                        <motion.h4 variants={itemVariants} className='lg:text-2xl text-xl font-bold'>{service?.[`title_${locale}`]}</motion.h4>
                        <motion.p variants={itemVariants} className='text-accent-foreground'>{service?.[`desc_${locale}`]}</motion.p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}

export default Services