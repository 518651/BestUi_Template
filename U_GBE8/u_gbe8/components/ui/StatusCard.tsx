import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image } from "@nextui-org/react";
import { Power, RefreshCcw, X } from "lucide-react";

export default function StatusCard(){
    return(
        <Card radius="sm" shadow="sm" className="p-2 w-[30%] h-full">
            <CardBody>
                <h1 className="scroll-m-20 pb-2">连接状态</h1>
                <StatusInfoItem/>
                <Divider className="my-3" />
                <StatusInfoItem/>

                
            </CardBody>
            <CardFooter>
                <div className="flex items-center space-x-2 w-full">
                    <Button size="sm" variant="bordered" className="border-1 w-full"> <RefreshCcw className="w-4 h-4 text-Ver_Primary_accents_2" />  刷新</Button>
                    <Button size="sm" variant="bordered" className="border-1 w-full text-red-600"> <X  className="w-4 h-4 "/>  关闭 </Button>
                </div>
            </CardFooter>
        </Card>
    )
}   


function StatusInfoItem(){
    return(
        <div className="flex justify-between items-center py-1 ">
            <div className="flex flex-col">
                <p className="leading-7 [&:not(:first-child)]:mt-6">IO版本控制系统</p>
                <div className="flex items-center ">
                    <span className="w-2 h-2 mr-1 rounded-full bg-success-600"></span>
                    <p className="text-sm text-success-600">运行中</p>
                </div>
            </div>
            <div className="flex items-center space-x-1">
                <Button isIconOnly variant="bordered" className="border"> <Power className="w-4 h-4  text-red-600"/> </Button>
                <Button isIconOnly variant="bordered" className="border">
                    <Image className="w-[45%] mx-auto grayscale" src="https://cdn.worldvectorlogo.com/logos/docker-4.svg"/>
                </Button>
            </div>
        </div>
    )
}