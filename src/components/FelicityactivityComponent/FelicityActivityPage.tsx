"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Mail,
  MapPin,
  MessagesSquare,
  MoreVertical,
  Phone,
  Plus,
} from "lucide-react";
import SendMessage from "./SendMessage";
import { useRouter } from "next/navigation";
import { useTaskStore } from "@/lib/store";

export function FelicityActivityPage({id}:{id:string}) {
  const {tasks} = useTaskStore()
  const router = useRouter()
  const theTask =  tasks.find(task => task.uuid === id)
  return (
    <div className="flex h-screen bg-transparent">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center px-6 py-4 bg-white border-b">
          <div className="h-fit w-fit p-3 border rounded-full cursor-pointer" onClick={() => router.back()}>
            <ArrowLeft className="h-6 w-6 text-gray-600  " />
          </div>
          <div className="ml-4 flex-1">
            <h1 className="text-lg font-semibold">
              {theTask?.summary} - {theTask?.assignee}
            </h1>
            <p className="text-sm text-gray-500">
              13:00PM - 50 Mission Road, London, SE4 5EW
            </p>
          </div>
          <MoreVertical className="h-6 w-6 text-gray-600" />
        </header>
        <main className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col space-y-4 p-4 ">
              <Tabs defaultValue="sms" className="w-full">
                <TabsList  className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="sms">
                    SMS Messages{" "}
                    <MessagesSquare className="h-4 w-4  ml-1.5" />
                  </TabsTrigger>
                  <TabsTrigger value="whatsapp">
                    WhatsApp Messages{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="ml-1.5 "
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                  </TabsTrigger>
                  <TabsTrigger value="email">Email <Mail className="h-4 w-4  ml-1.5" /></TabsTrigger>
                </TabsList>
                <TabsContent value="sms" className="space-y-4">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-start">
                      <div className="bg-transparent   max-w-[80%]">
                        <p className="text-sm bg-gray-100 p-3 rounded-lg">
                          Hi Felicity! Im interested in exploring options for
                          both leasing and potentially buying a property. Can
                          you help me compare the two?
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Sent via SMS: Annette Black 2:20
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start justify-end">
                      <div className=" bg-transparent text-white  max-w-[80%]">
                        <p className="text-sm bg-black  rounded-lg p-3">
                          Of course! I can provide details on both leasing and
                          buying options. Could you let me know what your
                          preferences are in terms of location, property type,
                          and budget?
                        </p>
                        <p className="text-xs text-end text-gray-400 mt-1">
                          Felicity AI 2:21
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-transparent   max-w-[80%]">
                        <p className="text-sm bg-gray-100 p-3 rounded-lg">
                          I am looking for a two-bedroom apartment in the
                          downtown area. For leasing, my budget is around £2,000
                          a month, and for buying, Id prefer something under
                          £400,000.
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Sent via SMS: Annette Black 2:22
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start justify-end">
                      <div className=" bg-transparent text-white  max-w-[80%]">
                        <p className="text-sm bg-black  rounded-lg p-3">
                          Got it! Based on your criteria, I can show you a few
                          leasing options that fit your budget and location.
                          Leasing often comes with less upfront cost and more
                          flexibility. However, buying allows you to build
                          equity over time. Would you like to start with
                          available leasing listings, or would you prefer to
                          dive into buying options first?
                        </p>
                        <p className="text-xs text-end text-gray-400 mt-1">
                          Felicity AI 2:23
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              <SendMessage />
            </div>
          </div>
          <div className="w-96 bg-white border-l overflow-hidden">
            <div className="p-4">
              <Tabs defaultValue="jobs">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="jobs">jobs</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                  <TabsTrigger value="work">Work offer</TabsTrigger>
                </TabsList>
                <TabsContent value="jobs" className="mt-4 space-y-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">
                        #TA 0001 • Kimberly Swanson
                      </CardTitle>
                      <p className="text-xs text-gray-500">
                        Created 12:30 AM • 09 March 24
                      </p>
                      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 my-4 rounded-sm text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500 w-fit">
                        <span className="size-1.5 inline-block rounded-full bg-yellow-800 dark:bg-yellow-500"></span>
                        Needs Reply
                      </span>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold">
                        {theTask?.summary}
                      </p>
                      <p className="text-xs text-gray-500">
                        Kimberly reported a blocked sink in the kitchen of the
                        home.
                      </p>
                      <Button className="w-full mt-2" variant="outline">
                        View Full Details
                      </Button>
                      <Button className="w-full mt-2">Mark as Completed</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">
                        #TA 0001 • {theTask?.assignee}
                      </CardTitle>
                      <p className="text-xs text-gray-500">
                        Created 09:54 AM • 18 July 23
                      </p>
                      <span className="inline-flex my-4 items-center gap-x-1.5 py-1.5 px-3 rounded-sm text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500 w-fit">
                        <span className="size-1.5 inline-block rounded-full bg-yellow-800 dark:bg-yellow-500"></span>
                        Needs Reply
                      </span>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold">XYZ</p>
                      <p className="text-xs text-gray-500">
                        The tenant requested information about the rent price
                        and what day payment is due
                      </p>
                      <Button className="w-full mt-2" variant="outline">
                        View Details
                      </Button>
                      <Button className="w-full mt-2">Mark as Completed</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="contact" className="mt-4 space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>TENANT DETAILS</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <h3 className="text-lg font-medium mb-1">
                        {theTask?.assignee}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        The Edge at Glade Parks
                      </p>

                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Phone size={18} className="text-gray-400 mr-3" />
                            <div>
                              <p className="text-xs text-gray-400 mb-1">
                                Phone Number
                              </p>
                              <p className="text-sm">(+440) 555-0104</p>
                            </div>
                          </div>
                          <Plus size={18} className="text-gray-400" />
                        </div>

                        <div className="flex items-start justify-between">
                          <div className="flex items-start">
                            <Mail
                              size={18}
                              className="text-gray-400 mr-3 mt-1"
                            />
                            <div>
                              <p className="text-xs text-gray-400 mb-1">
                                Email
                              </p>
                              <p className="text-sm">hello@kathryn.com</p>
                              <p className="text-sm">ask.me@kathryn.com</p>
                            </div>
                          </div>
                          <Plus size={18} className="text-gray-400" />
                        </div>

                        <div className="flex items-start">
                          <MapPin
                            size={18}
                            className="text-gray-400 mr-3 mt-1"
                          />
                          <div>
                            <p className="text-xs text-gray-400 mb-1">
                              Full Address
                            </p>
                            <p className="text-sm">
                              Flat 50, The Edge, Glade Parks, London
                            </p>
                            <p className="text-sm">SW1 0RA</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
