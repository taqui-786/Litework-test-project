import { Mic, Paperclip, Smile, Image as ImgIcon, SendHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "../ui/input"

export default function SendMessage() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="border rounded-lg shadow-sm bg-white">
        <div className="p-4">
          <div className="flex flex-col space-y-2">
            <Input type="text" placeholder="You are welcome! I will be in touch with any updates.| Have a great day!" className="outline-none border-none" />
            
            <div className="flex items-center justify-between pt-2">
              <div className="flex space-x-2 text-primary">
                <button className="p-1 rounded-full hover:bg-gray-100">
                  <Mic className="w-5 h-5" />
                </button>
                <button className="p-1 rounded-full hover:bg-gray-100">
                  <Paperclip className="w-5 h-5" />
                </button>
                <button className="p-1 rounded-full hover:bg-gray-100">
                  <Smile className="w-5 h-5" />
                </button>
                <button className="p-1 rounded-full hover:bg-gray-100">
                  <ImgIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="text-sm font-normal">
                  Dismiss
                </Button>
                <Button className="text-sm font-normal bg-black text-white hover:bg-gray-800">
                  Send
                  <SendHorizontal className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}