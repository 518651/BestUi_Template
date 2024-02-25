
import { Link , Button } from "@nextui-org/react";
import { ChevronLeft } from "lucide-react";

export default function HeadUI(){
    return(
        <div className="bg-white pt-5 pb-6 border-b-2">
            <div className="flex w-full justify-between items-center max-w-[1650px] mx-auto">
                <div className="flex flex-col justify-start space-y-1">
                    <Link href="#" className="flex  items-center text-black hover:text-Ver_Primary_accents_4 cursor-pointer">
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        <h3 className="text-sm">返回设备列表</h3>
                    </Link>
                    <h2  className="ml-1 scroll-m-20 text-xl tracking-tight">
                        连接一个新设备
                    </h2>
                </div>

                <div className="flex items-center space-x-4">
                    <p className="text-sm text-Ver_Primary_accents_4">
                        在等待新设备连接时继续刷新<br/>
                        如果它无法连接，请联系我们的
                        <Link href="#" underline="always" size="sm" className="text-black">支持人员</Link>
                        或
                        <Link size="sm" showAnchorIcon href="#" color="foreground">
                        询问QQ群
                        </Link>
                    </p>
                    <Button >正在等待设备连接...</Button>
                </div>
                
            </div>
        </div>
        
    )
}