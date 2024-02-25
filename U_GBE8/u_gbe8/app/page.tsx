import DeviceName from "@/components/ui/DeviceNameCard";
import DeviceType from "@/components/ui/DeviceType";
import OperatingSystem from "@/components/ui/OperatingSystem";
import RunDockerCommand from "@/components/ui/RunDockerCommand";
import ScriptFile from "@/components/ui/ScriptFile";
import StatusCard from "@/components/ui/StatusCard";



export default function Home() {
  return (
    <main className="flex space-x-6">
      <StatusCard />
      <div className="flex flex-col space-y-6 w-full ">
        <DeviceName />
        <OperatingSystem/>
        <DeviceType/>
        <ScriptFile/>
        <RunDockerCommand/>
      </div>
    </main>
  );
}

