<?php

namespace App\Http\Mail;

use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendJoinLink extends Mailable
{
    use Queueable, SerializesModels;

     private $request;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($request)
    {
        $this->request  = $request;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $from = $this->request['userEmail'];
        $subject = $this->request['message'] ? $this->request['message'] : '';
        $user =  User::where('id',$this->request['user_id'])->first();
            if($user) {
                $to = $user->email;
            }
        return $this->from($from)
            ->replyTo($to)
            ->subject($subject)
            ->markdown('emails.sendJoinLink')
            ->with('request',$this->request);
    }
}
