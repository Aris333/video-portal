<?php

namespace App\Http\Mail;

use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendInvitation extends Mailable
{
    use Queueable, SerializesModels;

     private $request;
     private $email;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($request,$email)
    {
        $this->request  = $request;
        $this->email  = $email;
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

         $test= array_merge($this->request, ['receiver_email' => $this->email]);

        return $this->from($from)
            ->replyTo($this->email)
            ->subject($subject)
            ->markdown('emails.sendInvite')
            ->with('request',$test);
    }
}
