"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { profileSchema } from "@/lib/validation"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User, Mail, Phone, Lock, Image } from "lucide-react"
import { useAuthStore } from "@/store/AuthStore"

type ProfileFormData = z.infer<typeof profileSchema>

export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  })

  const onSubmit = (data: ProfileFormData) => {
    console.log("Form Data:", data)
    // هنا تضع كود تحديث بيانات البروفايل على الخادم
  }

  const { user } = useAuthStore()

  if (!user) {
    return <p className="text-center mt-20">You must login to see this page.</p>
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative top-16"
    >
      <div className="outline-none m-20 p-10 bg-white rounded-lg shadow-lg space-y-6 border-2 border-gray-500">
        
        {/* الاسم الكامل */}
        <div>
          <label className="block mb-2 font-semibold">Full Name</label>
          <div className="flex items-center border rounded-lg px-3">
            <User className="w-5 h-5 text-gray-500 mr-2" />
            <Input
              {...register("name")}
              placeholder="Enter your full name"
              className="border-0 flex-1"
            />
          </div>
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* البريد الإلكتروني */}
        <div>
          <label className="block mb-2 font-semibold">Email</label>
          <div className="flex items-center border rounded-lg px-3">
            <Mail className="w-5 h-5 text-gray-500 mr-2" />
            <Input
              type="email"
              {...register("email")}
              placeholder="example@mail.com"
              className="border-0 flex-1"
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* رقم الهاتف */}
        <div>
          <label className="block mb-2 font-semibold">Phone Number</label>
          <div className="flex items-center border rounded-lg px-3">
            <Phone className="w-5 h-5 text-gray-500 mr-2" />
            <Input
              type="tel"
              {...register("phone")}
              placeholder="+213 555 000 000"
              className="border-0 flex-1"
            />
          </div>
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        {/* كلمة المرور */}
        <div>
          <label className="block mb-2 font-semibold">Password</label>
          <div className="flex items-center border rounded-lg px-3">
            <Lock className="w-5 h-5 text-gray-500 mr-2" />
            <Input
              type="password"
              {...register("password")}
              placeholder="********"
              className="border-0 flex-1"
            />
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* تأكيد كلمة المرور */}
        <div>
          <label className="block mb-2 font-semibold">Confirm Password</label>
          <div className="flex items-center border rounded-lg px-3">
            <Lock className="w-5 h-5 text-gray-500 mr-2" />
            <Input
              type="password"
              {...register("confirmPassword")}
              placeholder="********"
              className="border-0 flex-1"
            />
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
        </div>

        {/* صورة البروفايل */}
        <div>
          <label className="block mb-2 font-semibold">Profile Picture</label>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <Image className="w-5 h-5 text-gray-500 mr-2" />
            <Input
              type="file"
              {...register("image")}
              className="border-0 flex-1"
            />
          </div>
          {errors.image && <p className="text-red-500 text-sm">Please upload a valid image</p>}
        </div>

        {/* زر الحفظ */}
        <Button type="submit" className="w-full py-3 text-lg">
          Save Changes
        </Button>
      </div>
    </form>
  )
}
