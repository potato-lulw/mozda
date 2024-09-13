import Header from '../../components/header'
import { User } from 'lucide-react'
import React from 'react'

const BlogPage = ({ params: { id } }) => {
    return (
        <div className='flex flex-col bg-background items-center mx-auto min-h-screen '>

            <main className='flex-grow flex flex-col justify-center items-center w-full'>
                <div className='  w-full h-[600px] bg-pink-950 z-[0] text-white flex items-center flex-col'>
                    <Header /> Put your blog image here</div>
                <div className='flex-grow flex flex-col  items-center max-w-[900px] mt-10 w-full'>
                    <div className='w-full'>
                        <div className='bg-myPurple p-2 items-center justify-center flex rounded-md w-20 h-10 mb-5'>
                            Fashion
                        </div>
                    </div>
                    {/* BlogPage {id} */}
                    <div className='w-full text-left'>

                        <h1 className='text-4xl font-semibold w-full text-left'>BLOG TITLE </h1>
                        <div className='flex gap-2 mt-2'>
                            <div className='rounded-full h-10 w-10 bg-myPink justify-center items-center flex '>
                                <User size={24} />

                            </div>
                            <div className='flex flex-col gap-2 leading-4'>
                                <p className='text-gray-700 dark:text-gray-300'><span className='italic'>by</span> <span className='font-medium text-white'>Author</span></p>
                                <p className='text-gray-700 dark:text-gray-300'> <span className='font-medium'>March 10, 2023</span>   -   <span className='font-medium'> 1000 Views</span>   -   <span className='font-medium'> 10 Comments</span> - <span className='font-medium'>2 Min Read</span></p>
                            </div>
                        </div>

                        <div className='my-10 indent-4 text-justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sequi in dolorem cumque minus voluptatum eaque corporis temporibus, vero animi repellat magnam adipisci atque aspernatur voluptates iste voluptatem nisi necessitatibus iure obcaecati omnis, similique fuga! Nemo libero quaerat id architecto est perspiciatis maxime! Aliquam deserunt voluptatum porro quasi et quam consectetur ut similique beatae repudiandae. Inventore, itaque corrupti ea ab voluptatem a aliquid quisquam ipsam illo quidem quis voluptatibus quos sit. Ullam optio dolor maxime consequatur corrupti numquam laborum molestias incidunt vitae sit reprehenderit repudiandae aliquam tenetur, libero temporibus quasi officia? At odit laboriosam quia neque odio magni cum vel consequatur distinctio libero deserunt, ratione doloremque, animi quidem aliquam voluptatibus similique sint consequuntur facilis, repellat sit nostrum sapiente ducimus? Soluta sed dolores labore vero at accusamus excepturi. Mollitia commodi velit facilis nulla ipsa iure incidunt excepturi possimus perferendis est esse hic quibusdam dolorem temporibus veniam quidem, cumque architecto delectus, labore enim ab. Odit numquam dignissimos possimus architecto, labore necessitatibus fugiat odio neque recusandae quisquam enim iste libero quia, obcaecati fuga nulla tempore soluta aut reprehenderit corporis laudantium assumenda autem explicabo earum. Quaerat mollitia assumenda nulla, omnis saepe nostrum consequatur culpa similique, fuga tempore quas et itaque quos ut odit amet dicta ullam. Aliquam, a repellat voluptatibus reiciendis consequuntur nemo beatae distinctio aspernatur maxime aperiam veritatis exercitationem et asperiores magni voluptate aliquid atque
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default BlogPage
