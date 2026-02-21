"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { quotationSchema, QuotationFormValues } from "@/lib/utils"
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
import { sendQuotation } from "@/lib/main"
import { useTranslations } from "next-intl"

export default function ContactForm() {
 const t = useTranslations()
 const form = useForm<QuotationFormValues>({
  resolver: zodResolver(quotationSchema),
  defaultValues: {
    name: "",
    email: "",
    phone: "",
    volume: "",
    field: "",
    source_lang: "",
    target_lang: "",
    message: "",
  },
})

    const { mutate, status } = useMutation({
        mutationFn: sendQuotation,
        onSuccess: () => {
            toast.success(t('toast.success.title'), {
                description: t('toast.success.description')
            })
        },
        onError: (err: any) => {
            toast.error(t('toast.error.title'), {
                description: t('toast.error.description')
            })
        }
    })

    function onSubmit(values: QuotationFormValues) {
        mutate(values)
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 max-w-4xl w-full mx-auto"
            >
                <div className="flex lg:flex-row flex-col gap-4 w-full">
                    <div className="flex flex-col gap-4 w-full">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your name" {...field} />
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
                                    <FormLabel>Email</FormLabel>
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
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Phone number" {...field} />
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
                                    <FormLabel>Subject</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Subject" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Write your message..."
                                        className="lg:min-h-65 min-h-40"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full"
                    disabled={status === "pending"}
                >
                    {status === "pending" ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </Form>
    )
}
