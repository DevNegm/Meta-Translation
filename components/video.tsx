import { containerVariants, getYoutubeEmbedUrl, imageVariants, itemVariants } from '@/lib/utils';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
const Video = ({ data }: any) => {
    const video_ar = getYoutubeEmbedUrl(data?.video_section?.video_url_ar);
    const video_en = getYoutubeEmbedUrl(data?.video_section?.video_url_en);
    const locale = useLocale();
    return (
        <motion.section variants={containerVariants} initial="hidden" whileInView="show" className='max-w-350 w-[90%] mx-auto flex flex-col gap-5'>
            <motion.h3 variants={itemVariants} className='text-2xl lg:text-4xl font-bold text-center'>{data?.video_section?.[`title_${locale}`]}</motion.h3>
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" className="relative w-full aspect-video">
                <motion.iframe
                    variants={imageVariants}
                    src={locale === 'ar' ? video_ar : video_en}
                    title="YouTube video"
                    className="w-full h-full rounded-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </motion.div>
        </motion.section>
    )
}

export default Video