import { Card, CardContent, CardHeader } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { MessageCircle, Heart, Repeat2 } from "lucide-react"
import Link from "next/link"

export const PostCard = () => {
  return (
    <Link href={`/post/1`}>
<Card className="max-w-2xl p-4 rounded-none">
      <div className="gap-4">     
        <div className="flex flex-col flex-1">
          <CardHeader className="p-0 pb-2 text-sm font-semibold flex items-center">
            <Avatar>
                <AvatarImage src="/global.svg" />
                <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <span>@username</span>
          </CardHeader>
          <CardContent className="p-0 text-base text-zinc-800 dark:text-zinc-200">
            test test test test test test test test test test test test test test test
          </CardContent>
          <div className="mt-3 flex gap-4 text-zinc-500 text-sm">
            <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
              <Heart className="w-4 h-4" />
              12
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
              <MessageCircle className="w-4 h-4" />
              3
            </Button>  
            <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
              <Repeat2 className="w-4 h-4" />
              1
            </Button>
          </div>
        </div>
      </div>
    </Card>
    </Link>
  )
}
