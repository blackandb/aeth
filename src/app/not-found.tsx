import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center text-center">
      <div className="system-label mb-4">
        ERROR_CODE: 404 // NODE_NOT_FOUND
      </div>
      <h1 className="text-[120px] font-bold leading-none tracking-[-0.04em] max-md:text-[72px]">404</h1>
      <p className="mt-4 text-lg text-secondary">
        This node does not exist in the current architecture.
      </p>
      <div className="mt-8">
        <Link href="/" className="btn btn-primary">Return to System</Link>
      </div>
    </section>
  );
}
