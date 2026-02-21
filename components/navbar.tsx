import { Button } from './ui/button'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from "@/i18n/navigation"
import { Globe, Menu, Moon, Sun, X } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from 'next-themes'
import { Links, scrollTo, useScrollDirection } from '@/lib/utils'
import { useState } from 'react'
import { motion } from 'framer-motion'
const Navbar = () => {
    const locale = useLocale() as "en" | "ar"
    const router = useRouter()
    const pathname = usePathname()
    const { setTheme } = useTheme()
    const t = useTranslations('main');
    const [toggle, setToggle] = useState(false)
    const scrollDir = useScrollDirection();
    const [active, setActive] = useState('home')
    const switchLanguage = (nextLocale: "en" | "ar") => {
        router.push(pathname, { locale: nextLocale })
    }

    const handleLink = (id: string, offset: number) => {
        scrollTo(id, offset)
        setActive(id)
    }
    const handleMobileLink = (id: string, offset: number) => {
        setToggle(!toggle)
        scrollTo(id, offset)
        setActive(id)
    }
    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{ y: scrollDir === "down" ? -160 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className='fixed top-0 z-50 w-full flex flex-col justify-center items-center backdrop-blur  bg-background/75'
        >
            <div className='max-w-350 w-[90%] mx-auto py-4 flex items-center justify-between'>
                <div className='lg:w-50 cursor-pointer'  onClick={() => handleLink('home', 80)}>
                    <img src={'/logo.png'} className='w-20' alt='meta' />
                </div>
                <div className='hidden lg:flex items-center gap-4'>
                    {Links?.map((link) => (
                        <Button variant={'ghost'} className={`cursor-pointer ${active === link?.id ? "bg-accent" : ""}`} onClick={() => handleLink(link?.id, 80)}>{link?.[`name_${locale}`]}</Button>
                    ))}
                </div>

                <div className='flex items-center gap-4'>
                    <Button variant={'ghost'} className={`cursor-pointer hidden lg:block ${active === 'contact' ? "bg-accent" : ""}`} onClick={() => handleLink('contact', 80)}>{t('contact')}</Button>
                    <Button onClick={() => switchLanguage(locale === "en" ? "ar" : "en")} variant={"outline"} className="cursor-pointer hover:bg-transparent hover:opacity-80 transition " >
                        <Globe className="h-[1.2rem] w-[1.2rem]" />
                        {locale === "en" ? "العربية" : "English"}
                        <span className="sr-only">Toggle language</span>
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild id="mode-btn">
                            <Button variant="outline" size="icon" className="cursor-pointer">
                                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button onClick={() => setToggle(!toggle)} variant={"outline"} className="cursor-pointer hover:bg-transparent hover:opacity-80 transition lg:hidden" >
                        {toggle ? <X className="h-[1.2rem] w-[1.2rem]" /> : <Menu className="h-[1.2rem] w-[1.2rem]" />}
                        <span className="sr-only">Toggle navbar</span>
                    </Button>
                </div>
            </div>
            {toggle && <div className='lg:hidden flex flex-col gap-4 p-4 rounded-3xl  w-[90%]'>
                {Links?.map((link) => (
                    <Button variant={'ghost'} className='cursor-pointer flex justify-start! border-b rounded-none border-b-zinc-400 dark:border-b-zinc-600' onClick={() => handleMobileLink(link?.id, 80)}>{link?.[`name_${locale}`]}</Button>
                ))}
                <Button variant={'ghost'} className='cursor-pointer flex justify-start!  rounded-none ' onClick={() => handleMobileLink('contact', 80)}>{t('contact')}</Button>
            </div>}
        </motion.nav>
    )
}

export default Navbar