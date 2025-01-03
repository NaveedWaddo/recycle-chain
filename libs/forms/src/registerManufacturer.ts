import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const schemaRegisterManufacturer = z.object({
  name: z.string().min(1),
  location: z.string().min(1),
  contact: z.string().optional(),
})

export type FormTypeRegisterManufacturer = z.infer<
  typeof schemaRegisterManufacturer
>

export const useFormRegisterManufacturer = () =>
  useForm<FormTypeRegisterManufacturer>({
    resolver: zodResolver(schemaRegisterManufacturer),
  })
