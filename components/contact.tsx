import { z } from "zod";
import { Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage, } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
    const formSchema = z.object({
        username: z.string().min(2).max(50),
        email: z.string().email(),
        message: z.string()
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          email: '',
          message:''
        },
    })
    // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }    
    return (
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField 
            control={form.control}
            name="username"
            render={({field})=>(
                <FormItem>
                    <FormControl>
                        <Input 
                        placeholder="Your Name"
                        {...field}
                        className="text-secondary"
                    />
                    </FormControl>
                </FormItem>
            )}
        />
        <FormField 
            control={form.control}
            name="email"
            render={({field})=>(
                <FormItem>
                    <FormControl>
                        <Input 
                        placeholder="Your Email"
                        {...field}
                        className="text-secondary"
                    />
                    </FormControl>
                </FormItem>
            )}
        />
        <FormField 
            control={form.control}
            name="message"
            render={({field})=>(
                <FormItem>
                    <FormControl>
                        <Textarea 
                        placeholder="message"
                        {...field}
                        className="text-secondary"
                    />
                    </FormControl>
                </FormItem>
            )}
        />
        <Button variant="outline" type="submit">Submit</Button>
      </form>
    </Form>
    )
};
export default ContactForm