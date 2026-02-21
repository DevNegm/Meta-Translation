import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { containerVariants, imageVariants, itemVariants } from '@/lib/utils';
const Clients = ({ data }: any) => {
    const t = useTranslations('main');

    return (
        <motion.section variants={containerVariants} initial="hidden" whileInView="show" id='clients' className='max-w-350 w-[90%] mx-auto flex flex-col gap-5'>
            <motion.h3 variants={itemVariants} className='text-2xl lg:text-4xl font-bold text-center'>{t('clients-s')}</motion.h3>
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-4'>
                {data?.clients?.map((client: any, index: number) => (
                    <Link href={client?.url} key={index} className='w-full aspect-square'>
                        <motion.img variants={imageVariants} src={client?.image} className='w-full h-full rounded-2xl object-cover' alt="client" />
                    </Link>
                ))}
            </motion.div>
        </motion.section>
    )
}

export default Clients