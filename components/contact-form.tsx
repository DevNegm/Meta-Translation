"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import {  containerVariants, itemVariants } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { toast } from "sonner"
import { sendMessage } from "@/lib/main"
import { useTranslations } from "next-intl"
import { motion } from 'framer-motion'
import { SyncLoader } from "react-spinners"
import z from "zod"

export default function ContactForm() {
    const t = useTranslations('main')


    const contactSchema = z.object({
        name: z.string().min(2, t('name_req')),
        email: z.string().email(t('email_req')),
        phone: z.string().min(6, t('phone_req')),
        subject: z.string().min(1, t('subject_req')),
        message: z.string().min(1, t('message_req')),
    });

    type ContactFormValues = z.infer<typeof contactSchema>;


    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        },
    })

    const { mutate, status } = useMutation({
        mutationFn: sendMessage,
        onSuccess: () => {
            toast.success(t('toast_success_title'), {
                description: t('toast_success_desc')
            })
            form.reset()
        },
        onError: (err: any) => {
            toast.error(t('toast_error_title'), {
                description: t('toast_error_desc')
            })
        }
    })

    function onSubmit(values: ContactFormValues) {
        mutate(values)
    }

    return (
        <Form {...form}>
            <motion.form
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 max-w-4xl w-full mx-auto"
            >
                <motion.div variants={containerVariants} initial="hidden" whileInView="show" className="flex lg:flex-row flex-col gap-4 w-full">
                    <motion.div variants={containerVariants} initial="hidden" whileInView="show" className="flex flex-col gap-4 w-full">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('name')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t('name')} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('email')}</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="user@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('phone')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t('phone')} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('subject')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t('subject')} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </motion.div>

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>{t('message')}</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder={t('message')}
                                        className="lg:min-h-65 min-h-40"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </motion.div>
                <motion.div variants={itemVariants} >
                    <Button
                        type="submit"
                        className="w-fit cursor-pointer custom-btn rounded-full"
                        disabled={status === "pending"}
                    >
                        {status === "pending" ? <SyncLoader color="white" size={6} /> : t('send')}
                    </Button>
                </motion.div>
            </motion.form>
        </Form>
    )
}
