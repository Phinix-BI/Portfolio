
function Input({className,type,placeholder,onchange,title,id,...props}) {
  return (
   <div className="mb-8">
   <label
  htmlFor="UserEmail"
  className="relative block overflow-hidden rounded-lg border border-slate-500 dark:text-gray-400 px-3 pt-3 pb-3 shadow-sm "
>
  <input
    type={type}
    id={id}
    placeholder={placeholder}
    onChange={onchange}
    {...props}
    className={`${className} peer pt-3 h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-md`}
  />

  <span
    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-white-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs "
  >
   {title}
  </span>
</label>
</div>
  )
}

export default Input