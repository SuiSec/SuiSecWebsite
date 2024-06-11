"use client";

import { Separator } from "@/components/ui/separator";
import {
  ConnectButton,
  useCurrentAccount,
  useSignAndExecuteTransactionBlock,
  useSignTransactionBlock,
  useSuiClientContext,
} from "@mysten/dapp-kit";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { demoApi } from "@/api/demo";
import { useEffect, useState } from "react";
import { DemoData } from "@/types";

const Demo = () => {
  const ctx = useSuiClientContext();
  const router = useRouter();
  const currentAccount = useCurrentAccount();
  const [result, setResult] = useState<DemoData>();
  const [txBlockUrl, setTxBlockUrl] = useState<string>("");
  const [innerHeight, setInnerHeight] = useState<number>();
  const [innerWidth, setInnerWidth] = useState<number>();
  const { mutate: signAndExecuteTransactionBlock } =
    useSignAndExecuteTransactionBlock();

  useEffect(() => {
    setInnerHeight(window.innerHeight-800);
    setInnerWidth(window.innerWidth-600);
    ctx.selectNetwork("mainnet");
  }, []);

  const handelSelect = (value: string) => {
    setResult(undefined);
    ctx.selectNetwork(value);
  };
  const handelExecute = async () => {
    console.log("executeTransactionBlock");
    const txb = demoApi();

    await signAndExecuteTransactionBlock(
      {
        transactionBlock: txb,
        options: {
          showEvents: true,
        },
      },
      {
        onSuccess: (data) => {
          console.log(data.digest);
          const result: DemoData = data.digest as unknown as DemoData;
          if (result.Error !== undefined) {
            setResult(result);
          } else {
            const url =
              "https://suivision.xyz/txblock/" + data.digest + "?tab=Changes";
            setTxBlockUrl(url);
            console.log(url);
          }
        },
      }
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row p-10 justify-between">
        <Button
          variant="secondary"
          size={"lg"}
          onClick={() => router.push("/")}
        >
          Back
        </Button>
        <ConnectButton></ConnectButton>
      </div>
      <div className="flex flex-row gap-10 p-10">
        <div className="basis-1/3 space-y-5 flex flex-col justify-between">
          <Card className="h-80">
            <CardHeader>
              <CardTitle>Demo Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                This demo is used to test the difference between Mainnet RPC
                and our Risk Control RPC. The demo will try to execute a SCAM
                contract on the mainnet. The Mainnet RPC will execute normally,
                while our Risk Control RPC will block the execution.
              </p>
            </CardContent>
          </Card>
          <Select onValueChange={handelSelect} defaultValue="mainnet">
            <SelectTrigger>
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mainnet">Mainet RPC</SelectItem>
              <SelectItem value="riskControl">Risk Control RPC</SelectItem>
            </SelectContent>
          </Select>
          <Button
            disabled={currentAccount ? false : true}
            size={"lg"}
            onClick={handelExecute}
          >
            {currentAccount
              ? "executeTransactionBlock"
              : "connect wallet to execute transaction block"}
          </Button>
        </div>
        <div className="basis-2/3">
          <Card>
            <CardHeader>
              <CardTitle>Executed Result</CardTitle>
            </CardHeader>
            <CardContent>
              {result?.Error == undefined ? (
                <div>
                  <iframe
                    width={innerWidth}
                    height={innerHeight}
                    allowFullScreen
                    src={txBlockUrl}
                  ></iframe>
                </div>
              ) : (
                <div className="h-96 tracking-wide text-lg space-y-3">
                  <h1 className="text-red-600">{result?.Error?.name}:</h1>
                  <p>{result?.Error?.message}</p>
                  <Separator className="my-2"></Separator>
                  <h1 className="text-red-600">AnalyzeredData:</h1>
                  <h4 className="text-blue-500">Sender:</h4>
                  <p> {result?.analyzeredData?.sender}</p>
                  <h4 className="text-blue-500">CallPackage: </h4>
                  <p>{result?.analyzeredData?.callPackages}</p>
                  <h4 className="text-blue-500">Method: </h4>
                  <p>{result?.suiRequestBody.method}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Demo;
