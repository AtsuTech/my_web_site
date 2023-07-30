// 型のインポート
import type { FC } from "react"
import logo from '../Logo.png';
import { Link } from 'react-router-dom';

// 実際の使用例
export const Profile: FC = () => {
  return (
    <article className="w-96 ml-auto mr-auto ">
        <h1 className="mt-10 text-4xl text-center text-gray-600">Profile</h1>
        <img 
            className="block ml-auto mr-auto mt-10 rounded-full"
            src={logo} 
            width={230}
            alt="" 
        />
        <p className="mt-10">
            普段は半導体メーカーに勤務し、副業でITエンジニアとして活動。<br/>
            主にwebサイト作成、webアプリケーション開発などを承っております。<br/>
            新しい技術に触れるのが大好きで、キャッチアップに研鑽しております。
        </p>
    </article>
  )

}