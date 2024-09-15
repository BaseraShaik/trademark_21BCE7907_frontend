import { Search, Share2, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function Component() {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-blue-600">Trademarkia</h1>
        <div className="flex items-center space-x-2">
          <Input placeholder="Search Trademark Here eg. Mickey Mouse" className="w-80" />
          <Button>Search</Button>
        </div>
      </header>

      <div className="bg-pink-100 p-2 mb-4 rounded">
        <span className="font-semibold">About 159 Trademarks found for "Meta"</span>
      </div>

      <div className="flex gap-4">
        <aside className="w-1/4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold mb-2">Status</h2>
            <div className="space-y-2">
              <Checkbox id="all" label="All" />
              <Checkbox id="registered" label="Registered" />
              <Checkbox id="pending" label="Pending" />
              <Checkbox id="abandoned" label="Abandoned" />
              <Checkbox id="others" label="Others" />
            </div>

            <h2 className="font-bold mt-4 mb-2">Owners</h2>
            <div className="space-y-2">
              <Checkbox id="meta" label="Meta, Inc." />
              <Checkbox id="legalforce" label="LEGALFORCE RAPC" />
              <Checkbox id="spotify" label="Spotify Inc." />
              <Checkbox id="snapchat" label="Snapchat Inc." />
            </div>

            <h2 className="font-bold mt-4 mb-2">Display</h2>
            <RadioGroup defaultValue="grid">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="grid" id="grid" />
                <Label htmlFor="grid">Grid View</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="list" id="list" />
                <Label htmlFor="list">List View</Label>
              </div>
            </RadioGroup>
          </div>
        </aside>

        <main className="w-3/4">
          <div className="space-y-4">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="bg-white p-4 rounded shadow flex items-start">
                <div className="w-16 h-16 bg-gray-200 mr-4 flex-shrink-0"></div>
                <div className="flex-grow">
                  <h3 className="font-bold">Meta Logo</h3>
                  <p className="text-sm text-gray-600">FACEBOOK INC.</p>
                  <p className="text-sm">
                    <Badge variant="success" className="mr-2">Live/Registered</Badge>
                    <span className="text-green-600">30 Jan 2020</span>
                  </p>
                  <p className="text-sm mt-1">
                    Computer services, Social Media, Networking, Virtual Communities, Community
                  </p>
                  <div className="flex space-x-2 mt-1">
                    <Badge variant="secondary">Class 45</Badge>
                    <Badge variant="secondary">Class 9</Badge>
                    <Badge variant="secondary">Class 8</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-red-600">26 Dec 2027</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
