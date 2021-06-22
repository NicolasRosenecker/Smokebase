export class Comment {
  constructor(
    public comment_Id: number,
    public comment_item_Id: number,
    public comment_user: string,
    public comment_text: string,
    public user_id: number
  ){}
}
