<?php

namespace App\Http\Mail;

use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewComment extends Mailable
{
    use Queueable, SerializesModels;

     private $request;
     private $comment;
    /**
     * Create a new message instance.
     *
     * @return voida
     */
    public function __construct($request,$current_user,$comment)
    {
        $this->request  = $request;
        $this->comment  = $comment;
        $this->current_user  = $current_user;

    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $from =  $this->current_user['email'];
        $subject = $this->comment['comment'];
        $data= array_merge($this->comment->toArray(),
        ['comment_by' => $this->current_user['name'],'from' => $this->current_user['email']]);
        return $this->from($from)
            ->replyTo($this->request['email'])
            ->subject($subject)
            ->markdown('emails.newComment')
            ->with('request',$data);
    }
}
