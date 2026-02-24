import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { containerVariants, imageVariants, itemVariants } from '@/lib/utils';
const Clients = ({ data }: any) => {
    const t = useTranslations('main');
    return (
        <motion.section variants={containerVariants} initial="hidden" whileInView="show" id='clients' className='max-w-350 w-[90%] mx-auto flex flex-col gap-5'>
            <motion.h3 variants={itemVariants} className='text-2xl lg:text-4xl font-bold text-center'>{t('clients-s')}</motion.h3>
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" className='flex lg:flex-row justify-center flex-wrap gap-5'>
                {data?.clients?.map((client: any, index: number) => (
                    <Link href={client?.url ?? ''} key={index} className='lg:w-[calc(15%-20px)] md:w-[calc(25%-20px)] w-[calc(50%-20px)] aspect-square'>
                        <motion.img variants={imageVariants} src={client?.image} className='w-full h-full rounded-2xl object-cover' alt="client" />
                    </Link>
                ))}
            </motion.div>
        </motion.section>
    )
}

export default Clients