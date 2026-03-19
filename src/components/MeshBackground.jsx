export const MeshBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#f8fafc] dark:bg-[#0f172a]">
      {/* Top Left Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-300/40 dark:bg-purple-900/40 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]" />
      
      {/* Top Right Blob */}
      <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-300/40 dark:bg-blue-900/40 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-[pulse_10s_ease-in-out_infinite_reverse]" />
      
      {/* Bottom Blob */}
      <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-teal-300/40 dark:bg-teal-900/40 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-[pulse_12s_ease-in-out_infinite]" />
    </div>
  );
};