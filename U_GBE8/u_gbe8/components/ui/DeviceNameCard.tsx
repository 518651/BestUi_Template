import { Button, Card, CardBody, CardFooter, CardHeader, Input } from "@nextui-org/react";

export default function DeviceName() {
    return (
        <Card radius="sm" shadow="sm"  className="p-5">
            <CardHeader>
                <p className="text-xl font-bold tracking-wider">设备名称</p>
            </CardHeader>
            <CardBody className="flex flex-col gap-3">
                <p className="text-sm font-normal text-Ver_Primary_accents_4"  >
                    添加您的设备名称
                </p>
                <Input
                    size="sm"
                    variant="bordered"
                    type="displayname"
                    label="名称" className="w-[40%]"
                />
            </CardBody>
            <CardFooter className="flex justify-between items-center">
                <div className="flex  max-w-[65%] text-sm leading-6  text-neutral-400" >
                    此处可有附加说明
                </div>
                <Button size="sm" variant="faded" >
                    保存
                </Button>
            </CardFooter>
        </Card>
    )
}