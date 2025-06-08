import { Suspense } from "react"
import { notFound } from "next/navigation"
import CameraEditForm from "@/components/cameras/camera-edit-form"
import { CameraFormSkeleton } from "@/components/skeletons/camera-skeletons"
import { getCameraById } from "@/lib/api/cameras"

export default async function EditCameraPage({ params }: { params: { id: string } }) {
  try {
    const camera = await getCameraById(params.id)

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Edit Camera</h1>
        <Suspense fallback={<CameraFormSkeleton />}>
          <CameraEditForm cameraId={params.id} initialData={camera} />
        </Suspense>
      </div>
    )
  } catch (error) {
    notFound()
  }
}
