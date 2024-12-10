export default function Home() {
  return (
    <div className="flex flex-col items-center gap-y-[1rem]">
      <h1 className="text-4xl font-bold text-white">Boilerplates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[1rem] gap-x-[1rem]">
        <a
          href="/boilerplates/s3"
          target="_blank"
          className="flex flex-col items-center gap-y-[0.5rem] rounded-lg p-[1rem] text-white bg-[#9d4edd] hover:bg-[#c77dff]"
        >
          <div className="text-2xl font-bold">S3 Boilerplate</div>
          <p className="text-lg">
            This is a boilerplate for using AWS S3 with NestJS.
          </p>
        </a>
        <a
          href="/boilerplates/brevo"
          target="_blank"
          className="flex flex-col items-center gap-y-[0.5rem] rounded-lg p-[1rem] text-white bg-[#9d4edd] hover:bg-[#c77dff]"
        >
          <div className="text-2xl font-bold">Brevo Boilerplate</div>
          <p className="text-lg">
            This is a boilerplate for using Brevo with NestJS.
          </p>
        </a>
        <a
          href="/boilerplates/next/auth"
          target="_blank"
          className="flex flex-col items-center gap-y-[0.5rem] rounded-lg p-[1rem] text-white bg-[#9d4edd] hover:bg-[#c77dff]"
        >
          <div className="text-2xl font-bold">Next Auth Boilerplate</div>
          <p className="text-lg">
            This is a boilerplate to setup NextAuth with NextJS (App Router).
          </p>
        </a>
        <a
          href="/boilerplates/next/brevo"
          target="_blank"
          className="flex flex-col items-center gap-y-[0.5rem] rounded-lg p-[1rem] text-white bg-[#9d4edd] hover:bg-[#c77dff]"
        >
          <div className="text-2xl font-bold">Next Brevo Boilerplate</div>
          <p className="text-lg">
            This is a boilerplate to setup Brevo with NextJS (App Router).
          </p>
        </a>
        <a
          href="/boilerplates/adonis/auth"
          target="_blank"
          className="flex flex-col items-center gap-y-[0.5rem] rounded-lg p-[1rem] text-white bg-[#9d4edd] hover:bg-[#c77dff]"
        >
          <div className="text-2xl font-bold">Adonis (V6) Auth Boilerplate</div>
          <p className="text-lg">
            This is a boilerplate to setup Adonis Auth with @adonisjs/auth.
          </p>
        </a>
      </div>
    </div>
  );
}
