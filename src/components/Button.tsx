export default function Button({ text, link, target }: { text: string, link: string, target?: string }) {
    return <a href={link} className="font-medium text-lg text-center py-3 px-4 rounded-lg cursor-pointer shadow-sm border border-blue-500 text-gray-300 hover:bg-blue-500/80 transition-colors w-full" target={target}>{text}</a>
}