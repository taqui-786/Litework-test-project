"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Mail,
  MapPin,
  MoreVertical,
  Phone,
  Plus,
} from "lucide-react";
import SendMessage from "./SendMessage";

export function FelicityActivityPage() {
  return (
    <div className="flex h-screen bg-transparent">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center px-6 py-4 bg-white border-b">
          <ArrowLeft className="h-6 w-6 text-gray-600" />
          <div className="ml-4 flex-1">
            <h1 className="text-lg font-semibold">
              Kitchen Sink Repair - Kimberly
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
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="sms">SMS Messages</TabsTrigger>
                  <TabsTrigger value="whatsapp">WhatsApp Messages</TabsTrigger>
                  <TabsTrigger value="email">Email</TabsTrigger>
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
                        Kitchen Sink Repair
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
                        #TA 0001 • Kimberly Swanson
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
                        Annette Black
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
