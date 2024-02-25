'use client';
import { Button, Card, CardBody, CardFooter, CardHeader, Image, Input, Radio, RadioGroup, cn } from "@nextui-org/react";
import { Code2, Command, CornerDownRight, FileDown, Play } from "lucide-react";
import { CodeBlock } from 'react-code-block';

export default function RunDockerCommand() {
  const scr = `docker run -d"--sysctl net.ipv4.ping_group_range="tel:02147483647"
  --en TWINGATE_NETWORK="antbit"
  --env TWINGATE_ACCESS_TOKEN="
  -env TWINGATE_REFRESH_TOKEN=""
  --en TWINGATE_LABEL_HOSTNAME="hostname"
  --name "twingate-delightful-cricket"
  --restart=unless-stopped $(docker run --help grep ----pull /dev/null &echo "--pull=always")twingate/
  connector 1`
  


    return (
        <Card radius="sm" shadow="sm"  className="p-5">
            <CardHeader>
                <p className="text-xl font-bold tracking-wider">运行Dockr命令</p>
            </CardHeader>
            <CardBody className="gap-2">
              <p className="text-sm font-normal text-Ver_Primary_accents_4 mb-4" >
                将以下命令复制到Docker中
              </p>
              <div>
                <CodeBlock code={scr} language="js">
                  <CodeBlock.Code className="bg-Ver_Gray p-6 rounded-xl shadow-lg ">
                    <div className="table-row">
                      <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
                      <CodeBlock.LineContent className="table-cell">
                        <CodeBlock.Token />
                      </CodeBlock.LineContent>
                    </div>
                  </CodeBlock.Code>
                </CodeBlock>
              </div>
           
        
            
            
                
                
            </CardBody>

        </Card>
    )
}

const DesList = [
  { label:"1.下载脚本文件 SetUp.sh" , icon: Code2 },
  { label:"2.执行脚本文件 - ./Setup.sh" , icon: Command },
  { label:"3.设置执行权限 - chmod +x Setup.sh" , icon: CornerDownRight },
  { label:"4.自动重新启动系统后,重新运行安装程序" , icon: Play }
]