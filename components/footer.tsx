import { Links, scrollTo } from '@/lib/utils'
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter, usePathname } from "@/i18n/navigation"
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = ({ data }: any) => {
    const locale = useLocale() as "en" | "ar"
    const router = useRouter()
    const pathname = usePathname()
        const t = useTranslations('main')
    
    const switchLanguage = (nextLocale: "en" | "ar") => {
        router.push(pathname, { locale: nextLocale })
    }
    return (
        <footer className='flex flex-col gap-10 py-10 bg-[#252628] text-white'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 max-w-350 w-[90%] mx-auto '>
                <div className='flex flex-col gap-4'>
                    <p className='text-xl font-bold'>{t('footer_title')}</p>
                    <p className='text-zinc-200'>{data?.contact?.[`footer_${locale}`]}</p>
                    <div className='flex items-center gap-2'>
                        {data?.contact?.socialmedia?.map((el: any) => (
                            <Link key={`footer_${el?.id}`} href={el?.url} className='w-10 h-10 flex items-center justify-center bg-[#2F3032] rounded-full'>
                                <img src={el?.image} className='w-4 h-4 object-contain' alt="Social Media" />
                            </Link>
                        ))}

                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-xl font-bold'>{t('site_links')}</p>
                    {Links.map((item) => (
                        <button className='flex cursor-pointer text-zinc-300' key={`link-${item?.id}`} onClick={() => scrollTo(item?.id, 80)}>
                            {item?.[`name_${locale}`]}
                        </button>
                    ))}
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-xl font-bold'>{t('languages')}</p>
                    <button onClick={() => switchLanguage('en')} className='w-fit cursor-pointer font-semibold text-zinc-300'>{"English"}</button>
                    <button onClick={() => switchLanguage('ar')} className='w-fit cursor-pointer font-semibold text-zinc-300'>{"العربية"}</button>
                </div>

            </div>
            <div className="w-full max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Email Card */}
                    <div className="bg-[#191a1c] p-8 flex items-start gap-4">
                        <div className="shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#3B3C3E]">
                                <Mail className="h-6 w-6 text-white" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">{data?.contact?.email}</h3>
                            <p className="text-slate-300 text-sm mt-1">{t('contact_us')}</p>
                        </div>
                    </div>

                    {/* Phone Card - Featured */}
                    <div className="bg-[#D83030] p-8 flex items-start gap-4 md:z-10 transition-transform ">
                        <div className="shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#DE4F4F]">
                                <Phone className="h-6 w-6 text-white" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">{data?.contact?.phone}</h3>
                            <p className="text-red-100 text-sm mt-1">{t('call_us')}</p>
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className="bg-[#191a1c] p-8 flex items-start gap-4">
                        <div className="shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#3B3C3E]">
                                <MapPin className="h-6 w-6 text-white" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">{data?.contact?.address}</h3>
                            <p className="text-slate-300 text-sm mt-1">{t('visit_us')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <p>@ {new Date().getFullYear()} All Rights Reserved</p>

            </div>

        </footer>
    )
}

export default Footer