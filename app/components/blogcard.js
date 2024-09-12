"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const BlogCard = ({ title, imageSrc, comments, lastUpdated }) => {
    const router = useRouter();
    const handleOnBlogCardClick = () => {
        // Navigate to the blog post page

        console.log('Clicked on blog card:', title)
        router.push('/blog/' + title) // TODO: swap this with the id of the blog post
        console.log(title)
    }
    return (
        <div className="h-[160px]" onClick={handleOnBlogCardClick}>
            <div className="h-[100px] from-myPink to-myPurple bg-gradient-to-r rounded-lg">
                <Image src={imageSrc} alt={imageSrc} width={300} height={100} className="object-cover" />
            </div>
            <h2 className="text-lg font-medium">Blog title: {title}</h2>
            <p className="text-sm dark:text-gray-200 text-gray-800">{comments} comments, {lastUpdated} mins ago</p>
        </div>
    )
}

export default BlogCard