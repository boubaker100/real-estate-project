"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { profileSchema } from "@/lib/validation"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User, Mail, Phone, Lock, Image } from "lucide-react"

type ProfileFormData = z.infer<typeof profileSchema>

export default function EditProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  })

  const onSubmit = (data: ProfileFormData) => {
    console.log("✅ Form Data:", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Full Name */}
      <div>
        <label className="block mb-2 font-semibold">Full Name</label>
        <div className="flex items-center border rounded-lg px-3">
          <User className="w-5 h-5 text-gray-500 mr-2" />
          <Input {...register("name")} placeholder="Enter your full name" className="border-0 flex-1" />
        </div>
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 font-semibold">Email</label>
        <div className="flex items-center border rounded-lg px-3">
          <Mail className="w-5 h-5 text-gray-500 mr-2" />
          <Input {...register("email")} placeholder="example@mail.com" className="border-0 flex-1" />
        </div>
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block mb-2 font-semibold">Phone Number</label>
        <div className="flex items-center border rounded-lg px-3">
          <Phone className="w-5 h-5 text-gray-500 mr-2" />
          <Input {...register("phone")} placeholder="+1 234 567 890" className="border-0 flex-1" />
        </div>
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      </div>

      {/* Password */}
      <div>
        <label className="block mb-2 font-semibold">Password</label>
        <div className="flex items-center border rounded-lg px-3">
          <Lock className="w-5 h-5 text-gray-500 mr-2" />
          <Input type="password" {...register("password")} placeholder="********" className="border-0 flex-1" />
        </div>
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block mb-2 font-semibold">Confirm Password</label>
        <div className="flex items-center border rounded-lg px-3">
          <Lock className="w-5 h-5 text-gray-500 mr-2" />
          <Input type="password" {...register("confirmPassword")} placeholder="********" className="border-0 flex-1" />
        </div>
        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
      </div>

      {/* Avatar */}
      <div>
        <label className="block mb-2 font-semibold">Profile Picture</label>
        <div className="flex items-center border rounded-lg px-3 py-2">
          <Image className="w-5 h-5 text-gray-500 mr-2" />
          <Input type="file" {...register("image")} className="border-0 flex-1" />
        </div>
        {errors.image && <p className="text-red-500 text-sm">{"image is required"}</p>}
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full py-3 text-lg">
        Save Changes
      </Button>
    </form>
  )
}
