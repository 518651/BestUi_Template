'use client';
import { Button, Card, CardBody, CardFooter, CardHeader, Image, Input, Radio, RadioGroup, cn } from "@nextui-org/react";
import { Code2, Command, CornerDownRight, FileDown, Play } from "lucide-react";
import { CodeBlock } from 'react-code-block';

export default function ScriptFile() {
    const scr = `ldapsearch -h hostname -p 636 -b "dc=siroe,dc=com" -D \n"uid=bjensen,dc=example,dc=com" -w bindPassword -P /home/bjensen/\ncerts/cert.db  "givenname=Richard" \n ldapsearch -h hostname -p 636 -b "dc=example,dc=com" -Z -P /home/bjensen/security\n/cert.db -N "bjscert" -K /home/bjensen/security/key.db -W KeyPassword\n "givenname=Richard"ldapsearch -h hostname -p 636 -b "dc=example,dc=com" -Z -P /home\n/bjensen/security/cert.db -N "bjscert" -K /home/bjensen/security/key.db\n -W KeyPassword "givenname=Richard"`

    return (
        <Card radius="sm" shadow="sm"  className="p-5">
            <CardHeader>
                <p className="text-xl font-bold tracking-wider">脚本文件</p>
            </CardHeader>
            <CardBody className="flex flex-row justify-between gap-2">

            <div className="flex flex-col ">
              <p className="text-sm font-normal text-Ver_Primary_accents_4 mb-4" >
                设备中下载安装脚本文件
              </p>
              <div className="flex flex-col space-y-2">
                {DesList.map((Item) => (
                  <div key={Item.label}  className="flex flex-row gap-x-3 items-center">
                    <div className="flex h-8 w-8 bg-gray-300/60  border border-Ver_Primary_accents_3  items-center justify-center rounded-full">
                      <Item.icon className="w-4 h-4" />
                    </div>
                    <div className="mb-1 w-full flex-1 flex-col">
                      <p className="text-sm  text-Ver_Primary_accents_4">{Item.label}</p>
                    </div>
                  </div> 
                ))}
              </div>
              <Button color="primary" className="mt-4"> <FileDown className="w-4 h-4"/> 下载脚本文件</Button>
            </div>
         
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