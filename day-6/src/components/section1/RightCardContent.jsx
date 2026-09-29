

const RightCardContent = (props) => {
  return (
    <div>
      <div className='absolute rounded-4xl h-full w-full top-0 left-0 p-8 flex flex-col justify-between'>
        <h2  className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-shadow-2xs text-lg leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus modi excepturi, commodi repellendus ullam veniam.</p>
            <div className='flex justify-between'>
                <button className='text-white font-medium px-8 py-2 rounded-full bg-blue-600'>{props.tag}</button>
                <button className='text-white font-medium px-3 py-2 rounded-full bg-blue-600'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
